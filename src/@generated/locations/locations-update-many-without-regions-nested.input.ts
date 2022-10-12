import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutRegionsInput } from './locations-create-without-regions.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutRegionsInput } from './locations-create-or-connect-without-regions.input';
import { locationsUpsertWithWhereUniqueWithoutRegionsInput } from './locations-upsert-with-where-unique-without-regions.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { locationsUpdateWithWhereUniqueWithoutRegionsInput } from './locations-update-with-where-unique-without-regions.input';
import { locationsUpdateManyWithWhereWithoutRegionsInput } from './locations-update-many-with-where-without-regions.input';
import { locationsScalarWhereInput } from './locations-scalar-where.input';

@InputType()
export class locationsUpdateManyWithoutRegionsNestedInput {

    @Field(() => [locationsCreateWithoutRegionsInput], {nullable:true})
    @Type(() => locationsCreateWithoutRegionsInput)
    create?: Array<locationsCreateWithoutRegionsInput>;

    @Field(() => [locationsCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<locationsCreateOrConnectWithoutRegionsInput>;

    @Field(() => [locationsUpsertWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => locationsUpsertWithWhereUniqueWithoutRegionsInput)
    upsert?: Array<locationsUpsertWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [locationsWhereUniqueInput], {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    set?: Array<locationsWhereUniqueInput>;

    @Field(() => [locationsWhereUniqueInput], {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    disconnect?: Array<locationsWhereUniqueInput>;

    @Field(() => [locationsWhereUniqueInput], {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    delete?: Array<locationsWhereUniqueInput>;

    @Field(() => [locationsWhereUniqueInput], {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: Array<locationsWhereUniqueInput>;

    @Field(() => [locationsUpdateWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => locationsUpdateWithWhereUniqueWithoutRegionsInput)
    update?: Array<locationsUpdateWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [locationsUpdateManyWithWhereWithoutRegionsInput], {nullable:true})
    @Type(() => locationsUpdateManyWithWhereWithoutRegionsInput)
    updateMany?: Array<locationsUpdateManyWithWhereWithoutRegionsInput>;

    @Field(() => [locationsScalarWhereInput], {nullable:true})
    @Type(() => locationsScalarWhereInput)
    deleteMany?: Array<locationsScalarWhereInput>;
}
