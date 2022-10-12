import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput } from './nature-pokeathlon-stats-create-without-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput } from './nature-pokeathlon-stats-create-or-connect-without-pokeathlon-stats.input';
import { nature_pokeathlon_statsUpsertWithWhereUniqueWithoutPokeathlon_statsInput } from './nature-pokeathlon-stats-upsert-with-where-unique-without-pokeathlon-stats.input';
import { nature_pokeathlon_statsWhereUniqueInput } from './nature-pokeathlon-stats-where-unique.input';
import { nature_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput } from './nature-pokeathlon-stats-update-with-where-unique-without-pokeathlon-stats.input';
import { nature_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput } from './nature-pokeathlon-stats-update-many-with-where-without-pokeathlon-stats.input';
import { nature_pokeathlon_statsScalarWhereInput } from './nature-pokeathlon-stats-scalar-where.input';

@InputType()
export class nature_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput {

    @Field(() => [nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput)
    create?: Array<nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput>;

    @Field(() => [nature_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput)
    connectOrCreate?: Array<nature_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput>;

    @Field(() => [nature_pokeathlon_statsUpsertWithWhereUniqueWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsUpsertWithWhereUniqueWithoutPokeathlon_statsInput)
    upsert?: Array<nature_pokeathlon_statsUpsertWithWhereUniqueWithoutPokeathlon_statsInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    set?: Array<nature_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    disconnect?: Array<nature_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    delete?: Array<nature_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    connect?: Array<nature_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [nature_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput)
    update?: Array<nature_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput>;

    @Field(() => [nature_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput)
    updateMany?: Array<nature_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput>;

    @Field(() => [nature_pokeathlon_statsScalarWhereInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsScalarWhereInput)
    deleteMany?: Array<nature_pokeathlon_statsScalarWhereInput>;
}
