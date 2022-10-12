import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutBerriesInput } from './types-create-without-berries.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutBerriesInput } from './types-create-or-connect-without-berries.input';
import { typesUpsertWithoutBerriesInput } from './types-upsert-without-berries.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { typesUpdateWithoutBerriesInput } from './types-update-without-berries.input';

@InputType()
export class typesUpdateOneWithoutBerriesNestedInput {

    @Field(() => typesCreateWithoutBerriesInput, {nullable:true})
    @Type(() => typesCreateWithoutBerriesInput)
    create?: typesCreateWithoutBerriesInput;

    @Field(() => typesCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: typesCreateOrConnectWithoutBerriesInput;

    @Field(() => typesUpsertWithoutBerriesInput, {nullable:true})
    @Type(() => typesUpsertWithoutBerriesInput)
    upsert?: typesUpsertWithoutBerriesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutBerriesInput, {nullable:true})
    @Type(() => typesUpdateWithoutBerriesInput)
    update?: typesUpdateWithoutBerriesInput;
}
