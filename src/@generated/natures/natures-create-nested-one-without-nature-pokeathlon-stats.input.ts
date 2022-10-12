import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutNature_pokeathlon_statsInput } from './natures-create-without-nature-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutNature_pokeathlon_statsInput } from './natures-create-or-connect-without-nature-pokeathlon-stats.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';

@InputType()
export class naturesCreateNestedOneWithoutNature_pokeathlon_statsInput {

    @Field(() => naturesCreateWithoutNature_pokeathlon_statsInput, {nullable:true})
    @Type(() => naturesCreateWithoutNature_pokeathlon_statsInput)
    create?: naturesCreateWithoutNature_pokeathlon_statsInput;

    @Field(() => naturesCreateOrConnectWithoutNature_pokeathlon_statsInput, {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutNature_pokeathlon_statsInput)
    connectOrCreate?: naturesCreateOrConnectWithoutNature_pokeathlon_statsInput;

    @Field(() => naturesWhereUniqueInput, {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: naturesWhereUniqueInput;
}
