import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocketsWhereInput } from '../item-pockets/item-pockets-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemPocketsArgs {

    @Field(() => item_pocketsWhereInput, {nullable:true})
    @Type(() => item_pocketsWhereInput)
    where?: item_pocketsWhereInput;
}
