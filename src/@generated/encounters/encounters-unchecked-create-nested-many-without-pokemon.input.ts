import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutPokemonInput } from './encounters-create-or-connect-without-pokemon.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class encountersUncheckedCreateNestedManyWithoutPokemonInput {

    @Field(() => [encountersCreateWithoutPokemonInput], {nullable:true})
    @Type(() => encountersCreateWithoutPokemonInput)
    create?: Array<encountersCreateWithoutPokemonInput>;

    @Field(() => [encountersCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<encountersCreateOrConnectWithoutPokemonInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    connect?: Array<encountersWhereUniqueInput>;
}
