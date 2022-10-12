import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseCreateWithoutItem_flagsInput } from './item-flag-prose-create-without-item-flags.input';
import { Type } from 'class-transformer';
import { item_flag_proseCreateOrConnectWithoutItem_flagsInput } from './item-flag-prose-create-or-connect-without-item-flags.input';
import { item_flag_proseWhereUniqueInput } from './item-flag-prose-where-unique.input';

@InputType()
export class item_flag_proseCreateNestedManyWithoutItem_flagsInput {

    @Field(() => [item_flag_proseCreateWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_proseCreateWithoutItem_flagsInput)
    create?: Array<item_flag_proseCreateWithoutItem_flagsInput>;

    @Field(() => [item_flag_proseCreateOrConnectWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_proseCreateOrConnectWithoutItem_flagsInput)
    connectOrCreate?: Array<item_flag_proseCreateOrConnectWithoutItem_flagsInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    connect?: Array<item_flag_proseWhereUniqueInput>;
}
