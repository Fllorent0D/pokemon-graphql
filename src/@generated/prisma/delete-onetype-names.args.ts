import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_namesWhereUniqueInput } from '../type-names/type-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnetypeNamesArgs {

    @Field(() => type_namesWhereUniqueInput, {nullable:false})
    @Type(() => type_namesWhereUniqueInput)
    where!: type_namesWhereUniqueInput;
}
