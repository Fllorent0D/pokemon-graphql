import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutStats_natures_decreased_stat_idTostatsInput } from './natures-create-without-stats-natures-decreased-stat-id-tostats.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutStats_natures_decreased_stat_idTostatsInput } from './natures-create-or-connect-without-stats-natures-decreased-stat-id-tostats.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';

@InputType()
export class naturesCreateNestedManyWithoutStats_natures_decreased_stat_idTostatsInput {

    @Field(() => [naturesCreateWithoutStats_natures_decreased_stat_idTostatsInput], {nullable:true})
    @Type(() => naturesCreateWithoutStats_natures_decreased_stat_idTostatsInput)
    create?: Array<naturesCreateWithoutStats_natures_decreased_stat_idTostatsInput>;

    @Field(() => [naturesCreateOrConnectWithoutStats_natures_decreased_stat_idTostatsInput], {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutStats_natures_decreased_stat_idTostatsInput)
    connectOrCreate?: Array<naturesCreateOrConnectWithoutStats_natures_decreased_stat_idTostatsInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: Array<naturesWhereUniqueInput>;
}
