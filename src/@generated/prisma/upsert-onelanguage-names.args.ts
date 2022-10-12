import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_namesWhereUniqueInput } from '../language-names/language-names-where-unique.input';
import { Type } from 'class-transformer';
import { language_namesCreateInput } from '../language-names/language-names-create.input';
import { language_namesUpdateInput } from '../language-names/language-names-update.input';

@ArgsType()
export class UpsertOnelanguageNamesArgs {

    @Field(() => language_namesWhereUniqueInput, {nullable:false})
    @Type(() => language_namesWhereUniqueInput)
    where!: language_namesWhereUniqueInput;

    @Field(() => language_namesCreateInput, {nullable:false})
    @Type(() => language_namesCreateInput)
    create!: language_namesCreateInput;

    @Field(() => language_namesUpdateInput, {nullable:false})
    @Type(() => language_namesUpdateInput)
    update!: language_namesUpdateInput;
}
