import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { naturesWhereInput } from './natures-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManynaturesArgs {

    @Field(() => naturesWhereInput, {nullable:true})
    @Type(() => naturesWhereInput)
    where?: naturesWhereInput;
}
