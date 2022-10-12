import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesCreateWithoutBerry_firmnessInput } from './berry-firmness-names-create-without-berry-firmness.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesCreateOrConnectWithoutBerry_firmnessInput } from './berry-firmness-names-create-or-connect-without-berry-firmness.input';
import { berry_firmness_namesUpsertWithWhereUniqueWithoutBerry_firmnessInput } from './berry-firmness-names-upsert-with-where-unique-without-berry-firmness.input';
import { berry_firmness_namesWhereUniqueInput } from './berry-firmness-names-where-unique.input';
import { berry_firmness_namesUpdateWithWhereUniqueWithoutBerry_firmnessInput } from './berry-firmness-names-update-with-where-unique-without-berry-firmness.input';
import { berry_firmness_namesUpdateManyWithWhereWithoutBerry_firmnessInput } from './berry-firmness-names-update-many-with-where-without-berry-firmness.input';
import { berry_firmness_namesScalarWhereInput } from './berry-firmness-names-scalar-where.input';

@InputType()
export class berry_firmness_namesUpdateManyWithoutBerry_firmnessNestedInput {

    @Field(() => [berry_firmness_namesCreateWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berry_firmness_namesCreateWithoutBerry_firmnessInput)
    create?: Array<berry_firmness_namesCreateWithoutBerry_firmnessInput>;

    @Field(() => [berry_firmness_namesCreateOrConnectWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berry_firmness_namesCreateOrConnectWithoutBerry_firmnessInput)
    connectOrCreate?: Array<berry_firmness_namesCreateOrConnectWithoutBerry_firmnessInput>;

    @Field(() => [berry_firmness_namesUpsertWithWhereUniqueWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berry_firmness_namesUpsertWithWhereUniqueWithoutBerry_firmnessInput)
    upsert?: Array<berry_firmness_namesUpsertWithWhereUniqueWithoutBerry_firmnessInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    set?: Array<berry_firmness_namesWhereUniqueInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    disconnect?: Array<berry_firmness_namesWhereUniqueInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    delete?: Array<berry_firmness_namesWhereUniqueInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    connect?: Array<berry_firmness_namesWhereUniqueInput>;

    @Field(() => [berry_firmness_namesUpdateWithWhereUniqueWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berry_firmness_namesUpdateWithWhereUniqueWithoutBerry_firmnessInput)
    update?: Array<berry_firmness_namesUpdateWithWhereUniqueWithoutBerry_firmnessInput>;

    @Field(() => [berry_firmness_namesUpdateManyWithWhereWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berry_firmness_namesUpdateManyWithWhereWithoutBerry_firmnessInput)
    updateMany?: Array<berry_firmness_namesUpdateManyWithWhereWithoutBerry_firmnessInput>;

    @Field(() => [berry_firmness_namesScalarWhereInput], {nullable:true})
    @Type(() => berry_firmness_namesScalarWhereInput)
    deleteMany?: Array<berry_firmness_namesScalarWhereInput>;
}
