import {Field} from "formik";

export const ObsahPrace = ({errors, touched}: any) => {

  function hasErrorAndTouched() {
    if (errors
      && errors.data
      && errors.data.obsah
      && touched
      && touched.data
      && touched.data.obsah
    ) {
      return true;
    }
  }

  return (
    <>
      <div className="flex w-[450px] component-preview p-4 font-sans flex-col">
        <label className="label">
            <span className="label-text text-lg">Obsah práce&nbsp;<span className={hasErrorAndTouched() ? "text-red-400" : ""}>
                {hasErrorAndTouched() ? "(Povinné)" : ""}</span></span>
          </label>
        <Field as="textarea"
               name={`data.obsah`}
               className={`input rounded-lg p-2 min-h-[300px] drop-shadow-lg 
               ${hasErrorAndTouched() ? "border-red-400 text-red-600" : ""}`} size="xxl" />
      </div>
    </>
  )
}