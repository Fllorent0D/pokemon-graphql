import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateWithoutTypesInput } from './berries-create-without-types.input';
import { Type } from 'class-transformer';
import { berriesCreateOrConnectWithoutTypesInput } from './berries-create-or-connect-without-types.input';
import { berriesUpsertWithWhereUniqueWithoutTypesInput } from './berries-upsert-with-where-unique-without-types.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { berriesUpdateWithWhereUniqueWithoutTypesInput } from './berries-update-with-where-unique-without-types.input';
import { berriesUpdateManyWithWhereWithoutTypesInput } from './berries-update-many-with-where-without-types.input';
import { berriesScalarWhereInput } from './berries-scalar-where.input';

@InputType()
export class berriesUpdateManyWithoutTypesNestedInput {

    @Field(() => [berriesCreateWithoutTypesInput], {nullable:true})
    @Type(() => berriesCreateWithoutTypesInput)
    create?: Array<berriesCreateWithoutTypesInput>;

    @Field(() => [berriesCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => berriesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<berriesCreateOrConnectWithoutTypesInput>;

    @Field(() => [berriesUpsertWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => berriesUpsertWithWhereUniqueWithoutTypesInput)
    upsert?: Array<berriesUpsertWithWhereUniqueWithoutTypesInput>;

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

    @Field(() => [berriesUpdateWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => berriesUpdateWithWhereUniqueWithoutTypesInput)
    update?: Array<berriesUpdateWithWhereUniqueWithoutTypesInput>;

    @Field(() => [berriesUpdateManyWithWhereWithoutTypesInput], {nullable:true})
    @Type(() => berriesUpdateManyWithWhereWithoutTypesInput)
    updateMany?: Array<berriesUpdateManyWithWhereWithoutTypesInput>;

    @Field(() => [berriesScalarWhereInput], {nullable:true})
    @Type(() => berriesScalarWhereInput)
    deleteMany?: Array<berriesScalarWhereInput>;
}
