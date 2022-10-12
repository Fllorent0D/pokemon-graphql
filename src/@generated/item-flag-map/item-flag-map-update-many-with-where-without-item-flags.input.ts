import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapScalarWhereInput } from './item-flag-map-scalar-where.input';
import { Type } from 'class-transformer';
import { item_flag_mapUncheckedUpdateManyWithoutItem_flag_mapInput } from './item-flag-map-unchecked-update-many-without-item-flag-map.input';

@InputType()
export class item_flag_mapUpdateManyWithWhereWithoutItem_flagsInput {

    @Field(() => item_flag_mapScalarWhereInput, {nullable:false})
    @Type(() => item_flag_mapScalarWhereInput)
    where!: item_flag_mapScalarWhereInput;

    @Field(() => item_flag_mapUncheckedUpdateManyWithoutItem_flag_mapInput, {nullable:false})
    @Type(() => item_flag_mapUncheckedUpdateManyWithoutItem_flag_mapInput)
    data!: item_flag_mapUncheckedUpdateManyWithoutItem_flag_mapInput;
}
