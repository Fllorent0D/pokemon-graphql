import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_namesCreateInput } from '../language-names/language-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelanguageNamesArgs {

    @Field(() => language_namesCreateInput, {nullable:false})
    @Type(() => language_namesCreateInput)
    data!: language_namesCreateInput;
}
