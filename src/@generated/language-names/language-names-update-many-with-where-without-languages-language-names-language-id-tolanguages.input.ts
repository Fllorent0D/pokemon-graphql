import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_namesScalarWhereInput } from './language-names-scalar-where.input';
import { Type } from 'class-transformer';
import { language_namesUpdateManyMutationInput } from './language-names-update-many-mutation.input';

@InputType()
export class language_namesUpdateManyWithWhereWithoutLanguages_language_names_language_idTolanguagesInput {

    @Field(() => language_namesScalarWhereInput, {nullable:false})
    @Type(() => language_namesScalarWhereInput)
    where!: language_namesScalarWhereInput;

    @Field(() => language_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => language_namesUpdateManyMutationInput)
    data!: language_namesUpdateManyMutationInput;
}
