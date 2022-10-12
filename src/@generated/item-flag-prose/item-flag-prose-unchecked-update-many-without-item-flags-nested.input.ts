import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseCreateWithoutItem_flagsInput } from './item-flag-prose-create-without-item-flags.input';
import { Type } from 'class-transformer';
import { item_flag_proseCreateOrConnectWithoutItem_flagsInput } from './item-flag-prose-create-or-connect-without-item-flags.input';
import { item_flag_proseUpsertWithWhereUniqueWithoutItem_flagsInput } from './item-flag-prose-upsert-with-where-unique-without-item-flags.input';
import { item_flag_proseWhereUniqueInput } from './item-flag-prose-where-unique.input';
import { item_flag_proseUpdateWithWhereUniqueWithoutItem_flagsInput } from './item-flag-prose-update-with-where-unique-without-item-flags.input';
import { item_flag_proseUpdateManyWithWhereWithoutItem_flagsInput } from './item-flag-prose-update-many-with-where-without-item-flags.input';
import { item_flag_proseScalarWhereInput } from './item-flag-prose-scalar-where.input';

@InputType()
export class item_flag_proseUncheckedUpdateManyWithoutItem_flagsNestedInput {

    @Field(() => [item_flag_proseCreateWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_proseCreateWithoutItem_flagsInput)
    create?: Array<item_flag_proseCreateWithoutItem_flagsInput>;

    @Field(() => [item_flag_proseCreateOrConnectWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_proseCreateOrConnectWithoutItem_flagsInput)
    connectOrCreate?: Array<item_flag_proseCreateOrConnectWithoutItem_flagsInput>;

    @Field(() => [item_flag_proseUpsertWithWhereUniqueWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_proseUpsertWithWhereUniqueWithoutItem_flagsInput)
    upsert?: Array<item_flag_proseUpsertWithWhereUniqueWithoutItem_flagsInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    set?: Array<item_flag_proseWhereUniqueInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    disconnect?: Array<item_flag_proseWhereUniqueInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    delete?: Array<item_flag_proseWhereUniqueInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    connect?: Array<item_flag_proseWhereUniqueInput>;

    @Field(() => [item_flag_proseUpdateWithWhereUniqueWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_proseUpdateWithWhereUniqueWithoutItem_flagsInput)
    update?: Array<item_flag_proseUpdateWithWhereUniqueWithoutItem_flagsInput>;

    @Field(() => [item_flag_proseUpdateManyWithWhereWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_proseUpdateManyWithWhereWithoutItem_flagsInput)
    updateMany?: Array<item_flag_proseUpdateManyWithWhereWithoutItem_flagsInput>;

    @Field(() => [item_flag_proseScalarWhereInput], {nullable:true})
    @Type(() => item_flag_proseScalarWhereInput)
    deleteMany?: Array<item_flag_proseScalarWhereInput>;
}
