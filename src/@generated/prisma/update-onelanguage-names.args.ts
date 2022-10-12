import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_namesUpdateInput } from '../language-names/language-names-update.input';
import { Type } from 'class-transformer';
import { language_namesWhereUniqueInput } from '../language-names/language-names-where-unique.input';

@ArgsType()
export class UpdateOnelanguageNamesArgs {

    @Field(() => language_namesUpdateInput, {nullable:false})
    @Type(() => language_namesUpdateInput)
    data!: language_namesUpdateInput;

    @Field(() => language_namesWhereUniqueInput, {nullable:false})
    @Type(() => language_namesWhereUniqueInput)
    where!: language_namesWhereUniqueInput;
}
