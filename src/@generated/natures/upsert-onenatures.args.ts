import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesCreateInput } from './natures-create.input';
import { naturesUpdateInput } from './natures-update.input';

@ArgsType()
export class UpsertOnenaturesArgs {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesCreateInput, {nullable:false})
    @Type(() => naturesCreateInput)
    create!: naturesCreateInput;

    @Field(() => naturesUpdateInput, {nullable:false})
    @Type(() => naturesUpdateInput)
    update!: naturesUpdateInput;
}
