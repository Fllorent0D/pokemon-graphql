import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesCreateWithoutNature_pokeathlon_statsInput } from './natures-create-without-nature-pokeathlon-stats.input';

@InputType()
export class naturesCreateOrConnectWithoutNature_pokeathlon_statsInput {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesCreateWithoutNature_pokeathlon_statsInput, {nullable:false})
    @Type(() => naturesCreateWithoutNature_pokeathlon_statsInput)
    create!: naturesCreateWithoutNature_pokeathlon_statsInput;
}
