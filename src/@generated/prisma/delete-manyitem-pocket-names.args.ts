import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocket_namesWhereInput } from '../item-pocket-names/item-pocket-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemPocketNamesArgs {

    @Field(() => item_pocket_namesWhereInput, {nullable:true})
    @Type(() => item_pocket_namesWhereInput)
    where?: item_pocket_namesWhereInput;
}
