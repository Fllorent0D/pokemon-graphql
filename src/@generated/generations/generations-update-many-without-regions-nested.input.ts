import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutRegionsInput } from './generations-create-without-regions.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutRegionsInput } from './generations-create-or-connect-without-regions.input';
import { generationsUpsertWithWhereUniqueWithoutRegionsInput } from './generations-upsert-with-where-unique-without-regions.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithWhereUniqueWithoutRegionsInput } from './generations-update-with-where-unique-without-regions.input';
import { generationsUpdateManyWithWhereWithoutRegionsInput } from './generations-update-many-with-where-without-regions.input';
import { generationsScalarWhereInput } from './generations-scalar-where.input';

@InputType()
export class generationsUpdateManyWithoutRegionsNestedInput {

    @Field(() => [generationsCreateWithoutRegionsInput], {nullable:true})
    @Type(() => generationsCreateWithoutRegionsInput)
    create?: Array<generationsCreateWithoutRegionsInput>;

    @Field(() => [generationsCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<generationsCreateOrConnectWithoutRegionsInput>;

    @Field(() => [generationsUpsertWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => generationsUpsertWithWhereUniqueWithoutRegionsInput)
    upsert?: Array<generationsUpsertWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    set?: Array<generationsWhereUniqueInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    disconnect?: Array<generationsWhereUniqueInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    delete?: Array<generationsWhereUniqueInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: Array<generationsWhereUniqueInput>;

    @Field(() => [generationsUpdateWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => generationsUpdateWithWhereUniqueWithoutRegionsInput)
    update?: Array<generationsUpdateWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [generationsUpdateManyWithWhereWithoutRegionsInput], {nullable:true})
    @Type(() => generationsUpdateManyWithWhereWithoutRegionsInput)
    updateMany?: Array<generationsUpdateManyWithWhereWithoutRegionsInput>;

    @Field(() => [generationsScalarWhereInput], {nullable:true})
    @Type(() => generationsScalarWhereInput)
    deleteMany?: Array<generationsScalarWhereInput>;
}
