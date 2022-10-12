import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutPokemonInput } from './encounters-create-or-connect-without-pokemon.input';
import { encountersUpsertWithWhereUniqueWithoutPokemonInput } from './encounters-upsert-with-where-unique-without-pokemon.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { encountersUpdateWithWhereUniqueWithoutPokemonInput } from './encounters-update-with-where-unique-without-pokemon.input';
import { encountersUpdateManyWithWhereWithoutPokemonInput } from './encounters-update-many-with-where-without-pokemon.input';
import { encountersScalarWhereInput } from './encounters-scalar-where.input';

@InputType()
export class encountersUpdateManyWithoutPokemonNestedInput {

    @Field(() => [encountersCreateWithoutPokemonInput], {nullable:true})
    @Type(() => encountersCreateWithoutPokemonInput)
    create?: Array<encountersCreateWithoutPokemonInput>;

    @Field(() => [encountersCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<encountersCreateOrConnectWithoutPokemonInput>;

    @Field(() => [encountersUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => encountersUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<encountersUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    set?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    disconnect?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    delete?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    connect?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => encountersUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<encountersUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [encountersUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => encountersUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<encountersUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [encountersScalarWhereInput], {nullable:true})
    @Type(() => encountersScalarWhereInput)
    deleteMany?: Array<encountersScalarWhereInput>;
}
