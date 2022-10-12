import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsCreateWithoutBerriesInput } from './berry-flavors-create-without-berries.input';
import { Type } from 'class-transformer';
import { berry_flavorsCreateOrConnectWithoutBerriesInput } from './berry-flavors-create-or-connect-without-berries.input';
import { berry_flavorsUpsertWithWhereUniqueWithoutBerriesInput } from './berry-flavors-upsert-with-where-unique-without-berries.input';
import { berry_flavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { berry_flavorsUpdateWithWhereUniqueWithoutBerriesInput } from './berry-flavors-update-with-where-unique-without-berries.input';
import { berry_flavorsUpdateManyWithWhereWithoutBerriesInput } from './berry-flavors-update-many-with-where-without-berries.input';
import { berry_flavorsScalarWhereInput } from './berry-flavors-scalar-where.input';

@InputType()
export class berry_flavorsUpdateManyWithoutBerriesNestedInput {

    @Field(() => [berry_flavorsCreateWithoutBerriesInput], {nullable:true})
    @Type(() => berry_flavorsCreateWithoutBerriesInput)
    create?: Array<berry_flavorsCreateWithoutBerriesInput>;

    @Field(() => [berry_flavorsCreateOrConnectWithoutBerriesInput], {nullable:true})
    @Type(() => berry_flavorsCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: Array<berry_flavorsCreateOrConnectWithoutBerriesInput>;

    @Field(() => [berry_flavorsUpsertWithWhereUniqueWithoutBerriesInput], {nullable:true})
    @Type(() => berry_flavorsUpsertWithWhereUniqueWithoutBerriesInput)
    upsert?: Array<berry_flavorsUpsertWithWhereUniqueWithoutBerriesInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    set?: Array<berry_flavorsWhereUniqueInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    disconnect?: Array<berry_flavorsWhereUniqueInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    delete?: Array<berry_flavorsWhereUniqueInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    connect?: Array<berry_flavorsWhereUniqueInput>;

    @Field(() => [berry_flavorsUpdateWithWhereUniqueWithoutBerriesInput], {nullable:true})
    @Type(() => berry_flavorsUpdateWithWhereUniqueWithoutBerriesInput)
    update?: Array<berry_flavorsUpdateWithWhereUniqueWithoutBerriesInput>;

    @Field(() => [berry_flavorsUpdateManyWithWhereWithoutBerriesInput], {nullable:true})
    @Type(() => berry_flavorsUpdateManyWithWhereWithoutBerriesInput)
    updateMany?: Array<berry_flavorsUpdateManyWithWhereWithoutBerriesInput>;

    @Field(() => [berry_flavorsScalarWhereInput], {nullable:true})
    @Type(() => berry_flavorsScalarWhereInput)
    deleteMany?: Array<berry_flavorsScalarWhereInput>;
}
