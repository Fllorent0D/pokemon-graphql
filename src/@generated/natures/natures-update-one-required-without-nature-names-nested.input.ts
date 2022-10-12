import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutNature_namesInput } from './natures-create-without-nature-names.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutNature_namesInput } from './natures-create-or-connect-without-nature-names.input';
import { naturesUpsertWithoutNature_namesInput } from './natures-upsert-without-nature-names.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { naturesUpdateWithoutNature_namesInput } from './natures-update-without-nature-names.input';

@InputType()
export class naturesUpdateOneRequiredWithoutNature_namesNestedInput {

    @Field(() => naturesCreateWithoutNature_namesInput, {nullable:true})
    @Type(() => naturesCreateWithoutNature_namesInput)
    create?: naturesCreateWithoutNature_namesInput;

    @Field(() => naturesCreateOrConnectWithoutNature_namesInput, {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutNature_namesInput)
    connectOrCreate?: naturesCreateOrConnectWithoutNature_namesInput;

    @Field(() => naturesUpsertWithoutNature_namesInput, {nullable:true})
    @Type(() => naturesUpsertWithoutNature_namesInput)
    upsert?: naturesUpsertWithoutNature_namesInput;

    @Field(() => naturesWhereUniqueInput, {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: naturesWhereUniqueInput;

    @Field(() => naturesUpdateWithoutNature_namesInput, {nullable:true})
    @Type(() => naturesUpdateWithoutNature_namesInput)
    update?: naturesUpdateWithoutNature_namesInput;
}
