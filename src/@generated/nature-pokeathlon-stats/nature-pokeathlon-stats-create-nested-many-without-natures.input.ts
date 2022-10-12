import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsCreateWithoutNaturesInput } from './nature-pokeathlon-stats-create-without-natures.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsCreateOrConnectWithoutNaturesInput } from './nature-pokeathlon-stats-create-or-connect-without-natures.input';
import { nature_pokeathlon_statsWhereUniqueInput } from './nature-pokeathlon-stats-where-unique.input';

@InputType()
export class nature_pokeathlon_statsCreateNestedManyWithoutNaturesInput {

    @Field(() => [nature_pokeathlon_statsCreateWithoutNaturesInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsCreateWithoutNaturesInput)
    create?: Array<nature_pokeathlon_statsCreateWithoutNaturesInput>;

    @Field(() => [nature_pokeathlon_statsCreateOrConnectWithoutNaturesInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsCreateOrConnectWithoutNaturesInput)
    connectOrCreate?: Array<nature_pokeathlon_statsCreateOrConnectWithoutNaturesInput>;

    @Field(() => [nature_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    connect?: Array<nature_pokeathlon_statsWhereUniqueInput>;
}
