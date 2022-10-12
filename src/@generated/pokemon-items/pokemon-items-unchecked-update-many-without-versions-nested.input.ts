import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsCreateWithoutVersionsInput } from './pokemon-items-create-without-versions.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateOrConnectWithoutVersionsInput } from './pokemon-items-create-or-connect-without-versions.input';
import { pokemon_itemsUpsertWithWhereUniqueWithoutVersionsInput } from './pokemon-items-upsert-with-where-unique-without-versions.input';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { pokemon_itemsUpdateWithWhereUniqueWithoutVersionsInput } from './pokemon-items-update-with-where-unique-without-versions.input';
import { pokemon_itemsUpdateManyWithWhereWithoutVersionsInput } from './pokemon-items-update-many-with-where-without-versions.input';
import { pokemon_itemsScalarWhereInput } from './pokemon-items-scalar-where.input';

@InputType()
export class pokemon_itemsUncheckedUpdateManyWithoutVersionsNestedInput {

    @Field(() => [pokemon_itemsCreateWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_itemsCreateWithoutVersionsInput)
    create?: Array<pokemon_itemsCreateWithoutVersionsInput>;

    @Field(() => [pokemon_itemsCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_itemsCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<pokemon_itemsCreateOrConnectWithoutVersionsInput>;

    @Field(() => [pokemon_itemsUpsertWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_itemsUpsertWithWhereUniqueWithoutVersionsInput)
    upsert?: Array<pokemon_itemsUpsertWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    set?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    disconnect?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    delete?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    connect?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsUpdateWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_itemsUpdateWithWhereUniqueWithoutVersionsInput)
    update?: Array<pokemon_itemsUpdateWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [pokemon_itemsUpdateManyWithWhereWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_itemsUpdateManyWithWhereWithoutVersionsInput)
    updateMany?: Array<pokemon_itemsUpdateManyWithWhereWithoutVersionsInput>;

    @Field(() => [pokemon_itemsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_itemsScalarWhereInput)
    deleteMany?: Array<pokemon_itemsScalarWhereInput>;
}
