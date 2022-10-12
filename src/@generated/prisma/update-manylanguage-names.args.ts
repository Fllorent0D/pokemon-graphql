import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_namesUpdateManyMutationInput } from '../language-names/language-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { language_namesWhereInput } from '../language-names/language-names-where.input';

@ArgsType()
export class UpdateManylanguageNamesArgs {

    @Field(() => language_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => language_namesUpdateManyMutationInput)
    data!: language_namesUpdateManyMutationInput;

    @Field(() => language_namesWhereInput, {nullable:true})
    @Type(() => language_namesWhereInput)
    where?: language_namesWhereInput;
}
