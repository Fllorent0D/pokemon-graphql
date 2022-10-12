import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesUpdateWithoutNature_namesInput } from './natures-update-without-nature-names.input';
import { Type } from 'class-transformer';
import { naturesCreateWithoutNature_namesInput } from './natures-create-without-nature-names.input';

@InputType()
export class naturesUpsertWithoutNature_namesInput {

    @Field(() => naturesUpdateWithoutNature_namesInput, {nullable:false})
    @Type(() => naturesUpdateWithoutNature_namesInput)
    update!: naturesUpdateWithoutNature_namesInput;

    @Field(() => naturesCreateWithoutNature_namesInput, {nullable:false})
    @Type(() => naturesCreateWithoutNature_namesInput)
    create!: naturesCreateWithoutNature_namesInput;
}
