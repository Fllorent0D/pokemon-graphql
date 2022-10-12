import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutStats_natures_increased_stat_idTostatsInput } from './natures-create-without-stats-natures-increased-stat-id-tostats.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutStats_natures_increased_stat_idTostatsInput } from './natures-create-or-connect-without-stats-natures-increased-stat-id-tostats.input';
import { naturesUpsertWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput } from './natures-upsert-with-where-unique-without-stats-natures-increased-stat-id-tostats.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { naturesUpdateWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput } from './natures-update-with-where-unique-without-stats-natures-increased-stat-id-tostats.input';
import { naturesUpdateManyWithWhereWithoutStats_natures_increased_stat_idTostatsInput } from './natures-update-many-with-where-without-stats-natures-increased-stat-id-tostats.input';
import { naturesScalarWhereInput } from './natures-scalar-where.input';

@InputType()
export class naturesUpdateManyWithoutStats_natures_increased_stat_idTostatsNestedInput {

    @Field(() => [naturesCreateWithoutStats_natures_increased_stat_idTostatsInput], {nullable:true})
    @Type(() => naturesCreateWithoutStats_natures_increased_stat_idTostatsInput)
    create?: Array<naturesCreateWithoutStats_natures_increased_stat_idTostatsInput>;

    @Field(() => [naturesCreateOrConnectWithoutStats_natures_increased_stat_idTostatsInput], {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutStats_natures_increased_stat_idTostatsInput)
    connectOrCreate?: Array<naturesCreateOrConnectWithoutStats_natures_increased_stat_idTostatsInput>;

    @Field(() => [naturesUpsertWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput], {nullable:true})
    @Type(() => naturesUpsertWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput)
    upsert?: Array<naturesUpsertWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    set?: Array<naturesWhereUniqueInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    disconnect?: Array<naturesWhereUniqueInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    delete?: Array<naturesWhereUniqueInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: Array<naturesWhereUniqueInput>;

    @Field(() => [naturesUpdateWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput], {nullable:true})
    @Type(() => naturesUpdateWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput)
    update?: Array<naturesUpdateWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput>;

    @Field(() => [naturesUpdateManyWithWhereWithoutStats_natures_increased_stat_idTostatsInput], {nullable:true})
    @Type(() => naturesUpdateManyWithWhereWithoutStats_natures_increased_stat_idTostatsInput)
    updateMany?: Array<naturesUpdateManyWithWhereWithoutStats_natures_increased_stat_idTostatsInput>;

    @Field(() => [naturesScalarWhereInput], {nullable:true})
    @Type(() => naturesScalarWhereInput)
    deleteMany?: Array<naturesScalarWhereInput>;
}
