import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_stat_changesMove_idStat_idCompoundUniqueInput } from './move-meta-stat-changes-move-id-stat-id-compound-unique.input';

@InputType()
export class move_meta_stat_changesWhereUniqueInput {

    @Field(() => move_meta_stat_changesMove_idStat_idCompoundUniqueInput, {nullable:true})
    move_id_stat_id?: move_meta_stat_changesMove_idStat_idCompoundUniqueInput;
}
