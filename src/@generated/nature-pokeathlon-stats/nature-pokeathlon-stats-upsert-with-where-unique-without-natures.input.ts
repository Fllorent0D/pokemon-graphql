import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsWhereUniqueInput } from './nature-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsUpdateWithoutNaturesInput } from './nature-pokeathlon-stats-update-without-natures.input';
import { nature_pokeathlon_statsCreateWithoutNaturesInput } from './nature-pokeathlon-stats-create-without-natures.input';

@InputType()
export class nature_pokeathlon_statsUpsertWithWhereUniqueWithoutNaturesInput {

    @Field(() => nature_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    where!: nature_pokeathlon_statsWhereUniqueInput;

    @Field(() => nature_pokeathlon_statsUpdateWithoutNaturesInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsUpdateWithoutNaturesInput)
    update!: nature_pokeathlon_statsUpdateWithoutNaturesInput;

    @Field(() => nature_pokeathlon_statsCreateWithoutNaturesInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsCreateWithoutNaturesInput)
    create!: nature_pokeathlon_statsCreateWithoutNaturesInput;
}
