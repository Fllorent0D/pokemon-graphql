import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutNature_pokeathlon_statsInput } from './natures-create-without-nature-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutNature_pokeathlon_statsInput } from './natures-create-or-connect-without-nature-pokeathlon-stats.input';
import { naturesUpsertWithoutNature_pokeathlon_statsInput } from './natures-upsert-without-nature-pokeathlon-stats.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { naturesUpdateWithoutNature_pokeathlon_statsInput } from './natures-update-without-nature-pokeathlon-stats.input';

@InputType()
export class naturesUpdateOneRequiredWithoutNature_pokeathlon_statsNestedInput {

    @Field(() => naturesCreateWithoutNature_pokeathlon_statsInput, {nullable:true})
    @Type(() => naturesCreateWithoutNature_pokeathlon_statsInput)
    create?: naturesCreateWithoutNature_pokeathlon_statsInput;

    @Field(() => naturesCreateOrConnectWithoutNature_pokeathlon_statsInput, {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutNature_pokeathlon_statsInput)
    connectOrCreate?: naturesCreateOrConnectWithoutNature_pokeathlon_statsInput;

    @Field(() => naturesUpsertWithoutNature_pokeathlon_statsInput, {nullable:true})
    @Type(() => naturesUpsertWithoutNature_pokeathlon_statsInput)
    upsert?: naturesUpsertWithoutNature_pokeathlon_statsInput;

    @Field(() => naturesWhereUniqueInput, {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: naturesWhereUniqueInput;

    @Field(() => naturesUpdateWithoutNature_pokeathlon_statsInput, {nullable:true})
    @Type(() => naturesUpdateWithoutNature_pokeathlon_statsInput)
    update?: naturesUpdateWithoutNature_pokeathlon_statsInput;
}
