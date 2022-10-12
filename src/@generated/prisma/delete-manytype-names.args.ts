import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_namesWhereInput } from '../type-names/type-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManytypeNamesArgs {

    @Field(() => type_namesWhereInput, {nullable:true})
    @Type(() => type_namesWhereInput)
    where?: type_namesWhereInput;
}
