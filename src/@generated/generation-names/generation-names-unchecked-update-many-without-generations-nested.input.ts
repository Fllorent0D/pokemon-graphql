import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesCreateWithoutGenerationsInput } from './generation-names-create-without-generations.input';
import { Type } from 'class-transformer';
import { generation_namesCreateOrConnectWithoutGenerationsInput } from './generation-names-create-or-connect-without-generations.input';
import { generation_namesUpsertWithWhereUniqueWithoutGenerationsInput } from './generation-names-upsert-with-where-unique-without-generations.input';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';
import { generation_namesUpdateWithWhereUniqueWithoutGenerationsInput } from './generation-names-update-with-where-unique-without-generations.input';
import { generation_namesUpdateManyWithWhereWithoutGenerationsInput } from './generation-names-update-many-with-where-without-generations.input';
import { generation_namesScalarWhereInput } from './generation-names-scalar-where.input';

@InputType()
export class generation_namesUncheckedUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [generation_namesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => generation_namesCreateWithoutGenerationsInput)
    create?: Array<generation_namesCreateWithoutGenerationsInput>;

    @Field(() => [generation_namesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => generation_namesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<generation_namesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [generation_namesUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => generation_namesUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<generation_namesUpsertWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    set?: Array<generation_namesWhereUniqueInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    disconnect?: Array<generation_namesWhereUniqueInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    delete?: Array<generation_namesWhereUniqueInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    connect?: Array<generation_namesWhereUniqueInput>;

    @Field(() => [generation_namesUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => generation_namesUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<generation_namesUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [generation_namesUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => generation_namesUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<generation_namesUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [generation_namesScalarWhereInput], {nullable:true})
    @Type(() => generation_namesScalarWhereInput)
    deleteMany?: Array<generation_namesScalarWhereInput>;
}
