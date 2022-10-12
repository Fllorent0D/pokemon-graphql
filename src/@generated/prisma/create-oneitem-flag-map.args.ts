import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_mapCreateInput } from '../item-flag-map/item-flag-map-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemFlagMapArgs {

    @Field(() => item_flag_mapCreateInput, {nullable:false})
    @Type(() => item_flag_mapCreateInput)
    data!: item_flag_mapCreateInput;
}
