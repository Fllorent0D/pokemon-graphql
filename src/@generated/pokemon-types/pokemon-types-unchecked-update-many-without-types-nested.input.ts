import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesCreateWithoutTypesInput } from './pokemon-types-create-without-types.input';
import { Type } from 'class-transformer';
import { pokemon_typesCreateOrConnectWithoutTypesInput } from './pokemon-types-create-or-connect-without-types.input';
import { pokemon_typesUpsertWithWhereUniqueWithoutTypesInput } from './pokemon-types-upsert-with-where-unique-without-types.input';
import { pokemon_typesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { pokemon_typesUpdateWithWhereUniqueWithoutTypesInput } from './pokemon-types-update-with-where-unique-without-types.input';
import { pokemon_typesUpdateManyWithWhereWithoutTypesInput } from './pokemon-types-update-many-with-where-without-types.input';
import { pokemon_typesScalarWhereInput } from './pokemon-types-scalar-where.input';

@InputType()
export class pokemon_typesUncheckedUpdateManyWithoutTypesNestedInput {

    @Field(() => [pokemon_typesCreateWithoutTypesInput], {nullable:true})
    @Type(() => pokemon_typesCreateWithoutTypesInput)
    create?: Array<pokemon_typesCreateWithoutTypesInput>;

    @Field(() => [pokemon_typesCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => pokemon_typesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<pokemon_typesCreateOrConnectWithoutTypesInput>;

    @Field(() => [pokemon_typesUpsertWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => pokemon_typesUpsertWithWhereUniqueWithoutTypesInput)
    upsert?: Array<pokemon_typesUpsertWithWhereUniqueWithoutTypesInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    set?: Array<pokemon_typesWhereUniqueInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    disconnect?: Array<pokemon_typesWhereUniqueInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    delete?: Array<pokemon_typesWhereUniqueInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    connect?: Array<pokemon_typesWhereUniqueInput>;

    @Field(() => [pokemon_typesUpdateWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => pokemon_typesUpdateWithWhereUniqueWithoutTypesInput)
    update?: Array<pokemon_typesUpdateWithWhereUniqueWithoutTypesInput>;

    @Field(() => [pokemon_typesUpdateManyWithWhereWithoutTypesInput], {nullable:true})
    @Type(() => pokemon_typesUpdateManyWithWhereWithoutTypesInput)
    updateMany?: Array<pokemon_typesUpdateManyWithWhereWithoutTypesInput>;

    @Field(() => [pokemon_typesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_typesScalarWhereInput)
    deleteMany?: Array<pokemon_typesScalarWhereInput>;
}
