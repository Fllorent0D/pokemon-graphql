import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_type_namesWhereInput } from '../contest-type-names/contest-type-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycontestTypeNamesArgs {

    @Field(() => contest_type_namesWhereInput, {nullable:true})
    @Type(() => contest_type_namesWhereInput)
    where?: contest_type_namesWhereInput;
}
