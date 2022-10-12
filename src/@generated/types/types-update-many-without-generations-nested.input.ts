import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutGenerationsInput } from './types-create-without-generations.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutGenerationsInput } from './types-create-or-connect-without-generations.input';
import { typesUpsertWithWhereUniqueWithoutGenerationsInput } from './types-upsert-with-where-unique-without-generations.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { typesUpdateWithWhereUniqueWithoutGenerationsInput } from './types-update-with-where-unique-without-generations.input';
import { typesUpdateManyWithWhereWithoutGenerationsInput } from './types-update-many-with-where-without-generations.input';
import { typesScalarWhereInput } from './types-scalar-where.input';

@InputType()
export class typesUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [typesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => typesCreateWithoutGenerationsInput)
    create?: Array<typesCreateWithoutGenerationsInput>;

    @Field(() => [typesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => typesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<typesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [typesUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => typesUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<typesUpsertWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    set?: Array<typesWhereUniqueInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    disconnect?: Array<typesWhereUniqueInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    delete?: Array<typesWhereUniqueInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: Array<typesWhereUniqueInput>;

    @Field(() => [typesUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => typesUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<typesUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [typesUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => typesUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<typesUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [typesScalarWhereInput], {nullable:true})
    @Type(() => typesScalarWhereInput)
    deleteMany?: Array<typesScalarWhereInput>;
}
