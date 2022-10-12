import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapCreateWithoutItemsInput } from './item-flag-map-create-without-items.input';
import { Type } from 'class-transformer';
import { item_flag_mapCreateOrConnectWithoutItemsInput } from './item-flag-map-create-or-connect-without-items.input';
import { item_flag_mapWhereUniqueInput } from './item-flag-map-where-unique.input';

@InputType()
export class item_flag_mapCreateNestedManyWithoutItemsInput {

    @Field(() => [item_flag_mapCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_flag_mapCreateWithoutItemsInput)
    create?: Array<item_flag_mapCreateWithoutItemsInput>;

    @Field(() => [item_flag_mapCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_flag_mapCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_flag_mapCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_mapWhereUniqueInput)
    connect?: Array<item_flag_mapWhereUniqueInput>;
}
