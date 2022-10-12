import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_namesWhereInput } from '../item-names/item-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemNamesArgs {

    @Field(() => item_namesWhereInput, {nullable:true})
    @Type(() => item_namesWhereInput)
    where?: item_namesWhereInput;
}
