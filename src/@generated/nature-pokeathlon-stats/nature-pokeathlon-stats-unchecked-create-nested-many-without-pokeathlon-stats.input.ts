import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput } from './nature-pokeathlon-stats-create-without-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput } from './nature-pokeathlon-stats-create-or-connect-without-pokeathlon-stats.input';
import { nature_pokeathlon_statsWhereUniqueInput } from './nature-pokeathlon-stats-where-unique.input';

@InputType()
export class nature_pokeathlon_statsUncheckedCreateNestedManyWithoutPokeathlon_statsInput {

    @Field(() => [nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput)
    create?: Array<nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput>;

    @Field(() => [nature_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput)
    connectOrCreate?: Array<nature_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    connect?: Array<nature_pokeathlon_statsWhereUniqueInput>;
}
