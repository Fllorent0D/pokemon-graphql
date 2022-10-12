import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_namesWhereUniqueInput } from '../language-names/language-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquelanguageNamesArgs {

    @Field(() => language_namesWhereUniqueInput, {nullable:false})
    @Type(() => language_namesWhereUniqueInput)
    where!: language_namesWhereUniqueInput;
}
