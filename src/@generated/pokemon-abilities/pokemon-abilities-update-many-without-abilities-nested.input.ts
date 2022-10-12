import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesCreateWithoutAbilitiesInput } from './pokemon-abilities-create-without-abilities.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput } from './pokemon-abilities-create-or-connect-without-abilities.input';
import { pokemon_abilitiesUpsertWithWhereUniqueWithoutAbilitiesInput } from './pokemon-abilities-upsert-with-where-unique-without-abilities.input';
import { pokemon_abilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { pokemon_abilitiesUpdateWithWhereUniqueWithoutAbilitiesInput } from './pokemon-abilities-update-with-where-unique-without-abilities.input';
import { pokemon_abilitiesUpdateManyWithWhereWithoutAbilitiesInput } from './pokemon-abilities-update-many-with-where-without-abilities.input';
import { pokemon_abilitiesScalarWhereInput } from './pokemon-abilities-scalar-where.input';

@InputType()
export class pokemon_abilitiesUpdateManyWithoutAbilitiesNestedInput {

    @Field(() => [pokemon_abilitiesCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => pokemon_abilitiesCreateWithoutAbilitiesInput)
    create?: Array<pokemon_abilitiesCreateWithoutAbilitiesInput>;

    @Field(() => [pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [pokemon_abilitiesUpsertWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => pokemon_abilitiesUpsertWithWhereUniqueWithoutAbilitiesInput)
    upsert?: Array<pokemon_abilitiesUpsertWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    set?: Array<pokemon_abilitiesWhereUniqueInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    disconnect?: Array<pokemon_abilitiesWhereUniqueInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    delete?: Array<pokemon_abilitiesWhereUniqueInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    connect?: Array<pokemon_abilitiesWhereUniqueInput>;

    @Field(() => [pokemon_abilitiesUpdateWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => pokemon_abilitiesUpdateWithWhereUniqueWithoutAbilitiesInput)
    update?: Array<pokemon_abilitiesUpdateWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [pokemon_abilitiesUpdateManyWithWhereWithoutAbilitiesInput], {nullable:true})
    @Type(() => pokemon_abilitiesUpdateManyWithWhereWithoutAbilitiesInput)
    updateMany?: Array<pokemon_abilitiesUpdateManyWithWhereWithoutAbilitiesInput>;

    @Field(() => [pokemon_abilitiesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_abilitiesScalarWhereInput)
    deleteMany?: Array<pokemon_abilitiesScalarWhereInput>;
}
