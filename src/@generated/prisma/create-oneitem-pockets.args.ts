import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocketsCreateInput } from '../item-pockets/item-pockets-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemPocketsArgs {

    @Field(() => item_pocketsCreateInput, {nullable:false})
    @Type(() => item_pocketsCreateInput)
    data!: item_pocketsCreateInput;
}
