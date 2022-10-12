import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generation_namesWhereInput } from '../generation-names/generation-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygenerationNamesArgs {

    @Field(() => generation_namesWhereInput, {nullable:true})
    @Type(() => generation_namesWhereInput)
    where?: generation_namesWhereInput;
}
