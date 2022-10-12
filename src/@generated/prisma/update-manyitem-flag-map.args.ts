import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_mapUncheckedUpdateManyInput } from '../item-flag-map/item-flag-map-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { item_flag_mapWhereInput } from '../item-flag-map/item-flag-map-where.input';

@ArgsType()
export class UpdateManyitemFlagMapArgs {

    @Field(() => item_flag_mapUncheckedUpdateManyInput, {nullable:false})
    @Type(() => item_flag_mapUncheckedUpdateManyInput)
    data!: item_flag_mapUncheckedUpdateManyInput;

    @Field(() => item_flag_mapWhereInput, {nullable:true})
    @Type(() => item_flag_mapWhereInput)
    where?: item_flag_mapWhereInput;
}
