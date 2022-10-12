import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_namesWhereInput } from '../language-names/language-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManylanguageNamesArgs {

    @Field(() => language_namesWhereInput, {nullable:true})
    @Type(() => language_namesWhereInput)
    where?: language_namesWhereInput;
}
