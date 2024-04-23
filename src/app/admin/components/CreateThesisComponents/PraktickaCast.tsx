import {Field} from "formik";

export const PraktickaCast = ({errors, touched}: any) => {

  function hasErrorAndTouched() {
    if (errors
      && errors.data
      && errors.data.prakticka_cast
      && touched
      && touched.data
      && touched.data.prakticka_cast
    ) {
      return true;
    }
  }

  return (
    <>
      <div className="flex w-[450px] component-preview p-4 font-sans flex-col">
        <label className="label">
          <span className="label-text text-lg">Praktická část&nbsp;<span className={hasErrorAndTouched() ? "text-red-400" : ""}>
                {hasErrorAndTouched() ? "(Povinné)" : ""}</span></span>
        </label>
        <Field as="textarea"
               name={`data.prakticka_cast`}
               className={`input rounded-lg p-2 min-h-[300px] drop-shadow-lg
               ${hasErrorAndTouched() ? "border-red-400 text-red-600" : ""}
               `} size="xxl"/>
      </div>
    </>
  )
}