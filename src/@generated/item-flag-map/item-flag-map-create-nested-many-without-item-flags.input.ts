import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapCreateWithoutItem_flagsInput } from './item-flag-map-create-without-item-flags.input';
import { Type } from 'class-transformer';
import { item_flag_mapCreateOrConnectWithoutItem_flagsInput } from './item-flag-map-create-or-connect-without-item-flags.input';
import { item_flag_mapWhereUniqueInput } from './item-flag-map-where-unique.input';

@InputType()
export class item_flag_mapCreateNestedManyWithoutItem_flagsInput {

    @Field(() => [item_flag_mapCreateWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_mapCreateWithoutItem_flagsInput)
    create?: Array<item_flag_mapCreateWithoutItem_flagsInput>;

    @Field(() => [item_flag_mapCreateOrConnectWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_mapCreateOrConnectWithoutItem_flagsInput)
    connectOrCreate?: Array<item_flag_mapCreateOrConnectWithoutItem_flagsInput>;

    @Field(() => [item_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_mapWhereUniqueInput)
    connect?: Array<item_flag_mapWhereUniqueInput>;
}
