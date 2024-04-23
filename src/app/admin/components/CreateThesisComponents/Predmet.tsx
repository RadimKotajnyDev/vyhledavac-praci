import {Field} from "formik";

export const Predmet = ({errors, touched}: any) => {

   function hasErrorAndTouched() {
    if (errors
      && errors.data
      && errors.data.predmet
      && touched
      && touched.data
      && touched.data.predmet
    ) {
      return true;
    }
  }

  return (
    <>
      <div className="flex w-[330px] component-preview p-4 gap-2 font-sans">
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text text-lg">Předmět&nbsp;<span className={hasErrorAndTouched() ? "text-red-400" : ""}>
                {hasErrorAndTouched() ? "(Povinné)" : ""}</span></span>
          </label>
          <Field name={`data.predmet`} placeholder="např. WEB" className={`input p-2 px-4 rounded-xl drop-shadow-lg
          ${hasErrorAndTouched() ? "border-red-400 text-red-600" : ""}`}/>
        </div>
      </div>
    </>
  )
}