import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateWithoutItemsInput } from './berries-create-without-items.input';
import { Type } from 'class-transformer';
import { berriesCreateOrConnectWithoutItemsInput } from './berries-create-or-connect-without-items.input';
import { berriesUpsertWithWhereUniqueWithoutItemsInput } from './berries-upsert-with-where-unique-without-items.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { berriesUpdateWithWhereUniqueWithoutItemsInput } from './berries-update-with-where-unique-without-items.input';
import { berriesUpdateManyWithWhereWithoutItemsInput } from './berries-update-many-with-where-without-items.input';
import { berriesScalarWhereInput } from './berries-scalar-where.input';

@InputType()
export class berriesUpdateManyWithoutItemsNestedInput {

    @Field(() => [berriesCreateWithoutItemsInput], {nullable:true})
    @Type(() => berriesCreateWithoutItemsInput)
    create?: Array<berriesCreateWithoutItemsInput>;

    @Field(() => [berriesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => berriesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<berriesCreateOrConnectWithoutItemsInput>;

    @Field(() => [berriesUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => berriesUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<berriesUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [berriesWhereUniqueInput], {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    set?: Array<berriesWhereUniqueInput>;

    @Field(() => [berriesWhereUniqueInput], {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    disconnect?: Array<berriesWhereUniqueInput>;

    @Field(() => [berriesWhereUniqueInput], {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    delete?: Array<berriesWhereUniqueInput>;

    @Field(() => [berriesWhereUniqueInput], {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    connect?: Array<berriesWhereUniqueInput>;

    @Field(() => [berriesUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => berriesUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<berriesUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [berriesUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => berriesUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<berriesUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [berriesScalarWhereInput], {nullable:true})
    @Type(() => berriesScalarWhereInput)
    deleteMany?: Array<berriesScalarWhereInput>;
}
