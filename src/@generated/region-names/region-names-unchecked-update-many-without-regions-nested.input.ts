import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesCreateWithoutRegionsInput } from './region-names-create-without-regions.input';
import { Type } from 'class-transformer';
import { region_namesCreateOrConnectWithoutRegionsInput } from './region-names-create-or-connect-without-regions.input';
import { region_namesUpsertWithWhereUniqueWithoutRegionsInput } from './region-names-upsert-with-where-unique-without-regions.input';
import { region_namesWhereUniqueInput } from './region-names-where-unique.input';
import { region_namesUpdateWithWhereUniqueWithoutRegionsInput } from './region-names-update-with-where-unique-without-regions.input';
import { region_namesUpdateManyWithWhereWithoutRegionsInput } from './region-names-update-many-with-where-without-regions.input';
import { region_namesScalarWhereInput } from './region-names-scalar-where.input';

@InputType()
export class region_namesUncheckedUpdateManyWithoutRegionsNestedInput {

    @Field(() => [region_namesCreateWithoutRegionsInput], {nullable:true})
    @Type(() => region_namesCreateWithoutRegionsInput)
    create?: Array<region_namesCreateWithoutRegionsInput>;

    @Field(() => [region_namesCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => region_namesCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<region_namesCreateOrConnectWithoutRegionsInput>;

    @Field(() => [region_namesUpsertWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => region_namesUpsertWithWhereUniqueWithoutRegionsInput)
    upsert?: Array<region_namesUpsertWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    set?: Array<region_namesWhereUniqueInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    disconnect?: Array<region_namesWhereUniqueInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    delete?: Array<region_namesWhereUniqueInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    connect?: Array<region_namesWhereUniqueInput>;

    @Field(() => [region_namesUpdateWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => region_namesUpdateWithWhereUniqueWithoutRegionsInput)
    update?: Array<region_namesUpdateWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [region_namesUpdateManyWithWhereWithoutRegionsInput], {nullable:true})
    @Type(() => region_namesUpdateManyWithWhereWithoutRegionsInput)
    updateMany?: Array<region_namesUpdateManyWithWhereWithoutRegionsInput>;

    @Field(() => [region_namesScalarWhereInput], {nullable:true})
    @Type(() => region_namesScalarWhereInput)
    deleteMany?: Array<region_namesScalarWhereInput>;
}
