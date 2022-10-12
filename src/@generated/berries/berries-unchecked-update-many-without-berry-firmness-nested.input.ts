import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateWithoutBerry_firmnessInput } from './berries-create-without-berry-firmness.input';
import { Type } from 'class-transformer';
import { berriesCreateOrConnectWithoutBerry_firmnessInput } from './berries-create-or-connect-without-berry-firmness.input';
import { berriesUpsertWithWhereUniqueWithoutBerry_firmnessInput } from './berries-upsert-with-where-unique-without-berry-firmness.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { berriesUpdateWithWhereUniqueWithoutBerry_firmnessInput } from './berries-update-with-where-unique-without-berry-firmness.input';
import { berriesUpdateManyWithWhereWithoutBerry_firmnessInput } from './berries-update-many-with-where-without-berry-firmness.input';
import { berriesScalarWhereInput } from './berries-scalar-where.input';

@InputType()
export class berriesUncheckedUpdateManyWithoutBerry_firmnessNestedInput {

    @Field(() => [berriesCreateWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berriesCreateWithoutBerry_firmnessInput)
    create?: Array<berriesCreateWithoutBerry_firmnessInput>;

    @Field(() => [berriesCreateOrConnectWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berriesCreateOrConnectWithoutBerry_firmnessInput)
    connectOrCreate?: Array<berriesCreateOrConnectWithoutBerry_firmnessInput>;

    @Field(() => [berriesUpsertWithWhereUniqueWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berriesUpsertWithWhereUniqueWithoutBerry_firmnessInput)
    upsert?: Array<berriesUpsertWithWhereUniqueWithoutBerry_firmnessInput>;

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

    @Field(() => [berriesUpdateWithWhereUniqueWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berriesUpdateWithWhereUniqueWithoutBerry_firmnessInput)
    update?: Array<berriesUpdateWithWhereUniqueWithoutBerry_firmnessInput>;

    @Field(() => [berriesUpdateManyWithWhereWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berriesUpdateManyWithWhereWithoutBerry_firmnessInput)
    updateMany?: Array<berriesUpdateManyWithWhereWithoutBerry_firmnessInput>;

    @Field(() => [berriesScalarWhereInput], {nullable:true})
    @Type(() => berriesScalarWhereInput)
    deleteMany?: Array<berriesScalarWhereInput>;
}
